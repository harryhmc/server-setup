// const { beforeEach, afterEach } = require('node:test');
const request = require('supertest');

// beforeEach()
describe('app', () => {
  describe('/{name}', () => {
    it('returns name environment variable and referrer header', async () => {
      jest.resetModules()
      process.env.NAME = "harry"
      const { app, server} = require('../src/index');
      const response = await request(app)
        .get('/')
        .set('Referer', 'www.google.com')
        .expect(200);
      
      expect(response.text).toBe('Hello, I\'m harry, brought to you by www.google.com');
      delete process.env.NAME
      server.close()
    })
    
    it('returns fallback environment variable', async () => {
      jest.resetModules()
      const {app,server} = require('../src/index');
      const response = await request(app)
        .get('/')
        .set('Referer', 'www.google.com')
        .expect(200);
      
      expect(response.text).toBe('Hello, I\'m a mystery, brought to you by www.google.com');
      delete process.env.NAME
      server.close()
    })
  })
})