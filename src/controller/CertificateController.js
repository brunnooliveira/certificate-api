const certificateService = require('../service/CertificateService');

class CertificateController {
  async emit(req, res) {
    try {
      const certificate = await certificateService.emit(
        req.body.html,
        req.body.data
      );
      res.contentType('application/pdf');
      return res.send(certificate);
    } catch (error) {
      res.status(500).send("Oops, we can't process your request!!!");
    }
  }

  async ping(req, res) {
    return res.send('pong');
  }
}

module.exports = new CertificateController();
