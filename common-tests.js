function commonTest(responseCode, contentType, time) {
  if (responseCode >= 200 && responseCode <= 399) {
      it('should be a successful response', () => {
          response.should.have.status(responseCode);
      });
  } else if (responseCode >= 400 && responseCode <= 599) {
      it('should be a unsuccessful response', () => {
          response.should.have.status(responseCode);
      });
  }

  if (time){
      it('should respond in a timely manner', () => {
          response.time.should.be.below(time);
      });
  }

  if (contentType){
      it('should return ' + contentType, () => {
          response.should.have.header('Content-Type', contentType);
      });
  }
}
