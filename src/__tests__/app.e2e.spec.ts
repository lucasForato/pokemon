import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('(GET) /api/v1/pokemon/ditto', () => {
    return request(app.getHttpServer())
      .get('/api/v1/pokemon/ditto')
      .expect(200)
      .expect(JSON.stringify(['limber', 'imposter']));
  });

  it('(GET) /api/v1/pokemon/incorrect_name', () => {
    return request(app.getHttpServer())
      .get('/api/v1/pokemon/incorrect_name')
      .expect(500)
      .expect('Failed to fetch data from PokeAPI');
  });

  it('(GET) /api/v1/pokemon/pikachu', () => {
    return request(app.getHttpServer())
      .get('/api/v1/pokemon/pikachu')
      .expect(200)
      .expect(JSON.stringify(['static', 'lightning-rod']));
  });

  it('(POST) /api/v1/pokemon/ditto', () => {
    return request(app.getHttpServer())
      .post('/api/v1/pokemon/ditto')
      .expect(404);
  });

  it('(DELETE) /api/v1/pokemon/ditto', () => {
    return request(app.getHttpServer())
      .delete('/api/v1/pokemon/ditto')
      .expect(404);
  });
});
