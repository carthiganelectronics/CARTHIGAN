# Testing Guide for Carthigan

This guide outlines the testing strategy for the Carthigan platform, including unit tests, integration tests, and end-to-end tests.

## Testing Stack

- **Unit Testing**: Jest with React Testing Library
- **Integration Testing**: Jest with Supabase mock utilities
- **End-to-End Testing**: Playwright
- **Type Checking**: TypeScript compiler
- **Linting**: ESLint with Prettier

## Running Tests

### Unit Tests

```bash
npm run test
```

### Unit Tests with Coverage

```bash
npm run test:coverage
```

### End-to-End Tests

```bash
npm run test:e2e
```

### Type Checking

```bash
npm run type-check
```

## Test Structure

```
├── __tests__/
│   ├── components/        # Component unit tests
│   ├── hooks/             # Hook unit tests
│   ├── lib/               # Utility function tests
│   ├── pages/             # Page component tests
│   └── integration/       # Integration tests
├── __mocks__/             # Mock implementations
└── e2e/                   # End-to-end tests
```

## Writing Tests

### Component Tests

```typescript
// Example component test
import { render, screen } from '@testing-library/react'
import ProductCard from '@/components/ProductCard'

describe('ProductCard', () => {
  const mockProduct = {
    id: 1,
    name: 'Arduino Uno',
    price: 15000,
    inStock: true
  }

  it('renders product information correctly', () => {
    render(<ProductCard product={mockProduct} />)
    
    expect(screen.getByText('Arduino Uno')).toBeInTheDocument()
    expect(screen.getByText('UGX 15,000')).toBeInTheDocument()
  })
})
```

### Hook Tests

```typescript
// Example hook test
import { renderHook, act } from '@testing-library/react'
import useCart from '@/hooks/useCart'

describe('useCart', () => {
  it('adds items to cart', () => {
    const { result } = renderHook(() => useCart())
    
    act(() => {
      result.current.addToCart({ id: 1, name: 'Test Product', price: 1000 })
    })
    
    expect(result.current.items).toHaveLength(1)
  })
})
```

### Integration Tests

```typescript
// Example integration test
import { supabase } from '@/lib/supabaseClient'
import { createProduct } from '@/lib/products'

jest.mock('@/lib/supabaseClient')

describe('Product Creation', () => {
  it('creates a product in the database', async () => {
    const mockProduct = {
      name: 'Test Product',
      price: 10000,
      category: 'electronics'
    }

    ;(supabase.from().insert as jest.Mock).mockResolvedValue({
      data: [{ ...mockProduct, id: 1 }],
      error: null
    })

    const result = await createProduct(mockProduct)
    
    expect(result).toEqual({ ...mockProduct, id: 1 })
  })
})
```

### End-to-End Tests

```typescript
// Example E2E test
import { test, expect } from '@playwright/test'

test('should display products on homepage', async ({ page }) => {
  await page.goto('/')
  
  await expect(page.getByText('Featured Products')).toBeVisible()
  await expect(page.locator('.product-card')).toHaveCount(6)
})
```

## Test Coverage Requirements

- **Components**: 80% coverage
- **Hooks**: 90% coverage
- **Utility Functions**: 95% coverage
- **API Routes**: 100% coverage
- **Supabase Functions**: 100% coverage

## Continuous Integration

All tests are run automatically in GitHub Actions on every push and pull request:

```yaml
# .github/workflows/ci.yml
name: CI

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run test:coverage
      - run: npm run type-check
```

## Mocking Strategy

### Supabase Mocking

```typescript
// __mocks__/supabaseClient.ts
const mockSupabase = {
  from: jest.fn(() => mockSupabase),
  select: jest.fn(() => mockSupabase),
  insert: jest.fn(() => mockSupabase),
  update: jest.fn(() => mockSupabase),
  delete: jest.fn(() => mockSupabase),
  eq: jest.fn(() => mockSupabase),
  data: null,
  error: null
}

export const supabase = mockSupabase
```

### Paystack Mocking

```typescript
// __mocks__/paystack.ts
export const initializeTransaction = jest.fn().mockResolvedValue({
  status: true,
  data: {
    reference: 'test_ref_123',
    authorization_url: 'https://test.paystack.com/pay'
  }
})
```

## Performance Testing

For performance testing, we use Lighthouse CI:

```bash
npm run test:perf
```

This runs Lighthouse audits on key pages and ensures:
- Performance score >= 90
- Accessibility score >= 95
- Best practices score >= 95
- SEO score >= 90

## Security Testing

Security tests are run with:

```bash
npm run test:security
```

This includes:
- Dependency vulnerability scanning
- XSS attack simulation
- CSRF protection verification

## Test Data Management

Test data is managed through:
1. Factory functions for creating test data
2. Database seeding for integration tests
3. Mock data for unit tests

```typescript
// __tests__/factories.ts
export const createProductFactory = (overrides = {}) => ({
  id: Math.floor(Math.random() * 1000),
  name: 'Test Product',
  description: 'Test product description',
  price: 10000,
  category: 'electronics',
  inStock: true,
  ...overrides
})
```

## Debugging Tests

To debug tests:
1. Add `debugger` statements in your test code
2. Run tests in debug mode:
   ```bash
   npm run test:debug
   ```
3. Use VS Code Jest extension for interactive debugging

## Best Practices

1. **Test one thing at a time**: Each test should focus on a single behavior
2. **Use descriptive test names**: Clearly describe what is being tested
3. **Arrange-Act-Assert pattern**: Structure tests consistently
4. **Mock external dependencies**: Isolate the code under test
5. **Clean up after tests**: Use `afterEach` to reset state
6. **Test edge cases**: Include tests for error conditions
7. **Maintain test data**: Keep test data realistic and up-to-date

## Adding New Tests

When adding new features:
1. Write tests before implementing the feature (TDD)
2. Ensure new code has appropriate test coverage
3. Update this guide if new testing patterns are introduced
4. Run all tests to ensure nothing is broken