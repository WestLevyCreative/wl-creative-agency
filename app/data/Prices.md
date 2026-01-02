# Stripe Prices — Fill These In

Use this sheet to record the Stripe IDs so we can drop them into `src/data/services.ts`.

How to get IDs (Stripe Dashboard, Test mode is fine):
1) Products → Add (or open) product per tier.
2) Add two Prices: monthly and yearly with the amounts below.
3) Copy the generated `price_...` IDs here. Optional: note the product id (`prod_...`) and tax code if you set one.

Foundation (monthly €400, yearly €4000)
- product_id:  prod_ThC7mgllhhZuXC
- monthly_price_id:  price_1Sjnj3GaFjDjLXLxCT9iEeD0
- yearly_price_id:   price_1SjnjZGaFjDjLXLxjCOTaNk8

Ascent (monthly €600, yearly €6000)
- product_id:  prod_ThCdso6j8eJ2pK
- monthly_price_id:  price_1SjoEUGaFjDjLXLxasWn3SLT
- yearly_price_id:   price_1SjoF1GaFjDjLXLxhEqp7XRV

Apex (monthly €800, yearly €8000)
- product_id:  prod_ThCf6RsRvrf0OP
- monthly_price_id:  price_1SjoFoGaFjDjLXLxUYoYJZN0
- yearly_price_id:   price_1SjoGjGaFjDjLXLxvdrKXZiz

Legacy (monthly €1000, yearly €10000)
- product_id:  prod_ThChJ3CKWurz2w
- monthly_price_id:  price_1SjoI0GaFjDjLXLxiKDiFrk7
- yearly_price_id:   price_1SjoIyGaFjDjLXLx6ki7O5im

Copy/paste helper for `src/data/services.ts`
```
stripePriceIds: {
  monthly: "<monthly_price_id>",
  yearly: "<yearly_price_id>",
},
```
