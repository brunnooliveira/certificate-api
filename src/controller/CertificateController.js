class CertificateController {
  async emit(req, res) {
    return res.send('Certificado');
  }

  async ping(req, res) {
    return res.send('pong');
  }
}

module.exports = new CertificateController();
