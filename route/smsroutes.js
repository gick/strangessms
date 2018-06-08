module.exports = function(app, fireDB){
    let currentSession = fireDB.ref("sms/");
app
  .route('/webhooks/inbound-sms')
  .get(handleInboundSms)
  .post(handleInboundSms)

  function handleInboundSms(request, response) {
    const params = Object.assign(request.query, request.body)
    console.log(params)
    var newElem = currentSession.push();
    newElem.set({ query: request.query,body:request.body });

    response.status(204).send()
  }
  
}