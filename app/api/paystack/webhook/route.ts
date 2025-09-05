import { NextRequest } from 'next/server'
import { processSuccessfulTransaction } from '@/lib/paystack'

// This endpoint handles Paystack webhooks
export async function POST(request: NextRequest) {
  try {
    // In a real implementation, you would:
    // 1. Verify the webhook signature
    // 2. Parse the event data
    // 3. Process the transaction
    
    const payload = await request.json()
    
    // Verify webhook signature (pseudo-code)
    // const signature = headers().get('x-paystack-signature')
    // const secret = process.env.PAYSTACK_WEBHOOK_SECRET
    // if (!verifyWebhookSignature(payload, signature, secret)) {
    //   return new Response('Unauthorized', { status: 401 })
    // }
    
    // Handle different event types
    switch (payload.event) {
      case 'charge.success':
        // Process successful payment
        await processSuccessfulTransaction(
          payload.data.reference,
          payload.data
        )
        break
        
      case 'charge.failed':
        // Handle failed payment
        console.log('Payment failed:', payload.data.reference)
        break
        
      case 'refund.completed':
        // Handle refund
        console.log('Refund completed:', payload.data.reference)
        break
        
      default:
        console.log('Unhandled Paystack event:', payload.event)
    }
    
    return new Response('Webhook received', { status: 200 })
  } catch (error) {
    console.error('Error processing Paystack webhook:', error)
    return new Response('Error processing webhook', { status: 500 })
  }
}