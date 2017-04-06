var stripe = require('stripe')

module.exports = function (ctx, req, res) {
  var companyName = 'Salmon Bay Paddle'
  console.log(ctx.body)
  console.log(ctx.secrets)
  var amount = ctx.body.amount*100
  var description = ctx.body.description
  stripe(ctx.secrets.stripeTestSecretKey).charges.create({
    amount: amount,
    currency: 'usd',
    source: ctx.body.stripeToken,
    description: `${companyName} purchase - ${description}`
  }, function (error, charge) {
    if (error) {
      res.writeHead(500, { 'Content-Type': 'text/html'} )
      return res.end(`<h1>${error.message}</h1>`)
    } else {
      res.writeHead(
        301,
        {
          Location:
          `https://www.salmonbaypaddle.com/thank-you-for-your-payment/?amount=${amount}`
        }
      )
      res.end('redirecting')
    }
  })
}
