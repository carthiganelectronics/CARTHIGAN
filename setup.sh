#!/bin/bash

# Carthigan Setup Script

echo "Setting up Carthigan development environment..."

# Check if npm is available
if ! command -v npm &> /dev/null
then
    echo "npm could not be found. Checking for Node.js..."
    if ! command -v node &> /dev/null
    then
        echo "Node.js is not installed. Please install Node.js and npm to continue."
        exit 1
    else
        echo "Node.js is installed but npm is not in PATH. Trying to locate npm..."
        NPM_PATH=$(dirname $(which node))/npm
        if [ -f "$NPM_PATH" ]; then
            echo "Found npm at $NPM_PATH"
            NPM_CMD="$NPM_PATH"
        else
            echo "Could not locate npm. Please ensure npm is installed and in your PATH."
            exit 1
        fi
    fi
else
    NPM_CMD="npm"
fi

# Install dependencies
echo "Installing npm dependencies..."
$NPM_CMD install

# Install development dependencies
echo "Installing development dependencies..."
$NPM_CMD install --save-dev @types/react @types/node @types/react-dom typescript @types/jest jest @testing-library/react @testing-library/jest-dom

# Create .env.local file if it doesn't exist
if [ ! -f .env.local ]; then
  echo "Creating .env.local file..."
  cat > .env.local << EOF
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# Paystack Configuration (for production)
NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY=your_paystack_public_key
PAYSTACK_SECRET_KEY=your_paystack_secret_key

# Site Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000
EOF
  echo "Created .env.local file. Please update with your actual credentials."
fi

echo "Setup complete!"
echo "To start the development server, run: npm run dev"