import {Inject, Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Quote} from '../domain/quote.module';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import '../utils/debug.util';

@Injectable()
export class QuoteService {
  constructor(@Inject('BASE_CONFIG') private config,
              private http: Http) {

  }
  getQuote():Observable<Quote> {
    const uri = `${this.config.uri}/quotes/${Math.floor(Math.random() * 10)}`;
    return this.http.get(uri)
      .debug('quote: ')
      .map(res => res.json() as Quote);
  }
}
