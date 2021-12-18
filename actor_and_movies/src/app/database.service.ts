import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'}),
};

@Injectable({
  providedIn: 'root'
})

export class DatabaseService {

  constructor(private http: HttpClient) {
  }

  result: any;

  getActors() {
    return this.http.get('/actors');
  }

  getActor(id: string) {
    const url = '/actors/' + id;
    return this.http.get(url);
  }

  createActor(data: { name: string; bYear: number; }) {
    return this.http.post('/actors', data, httpOptions);
  }

  updateActor(id: string, data: { name: string; bYear: number; }) {
    const url = '/actors/' + id;
    return this.http.put(url, data, httpOptions);
  }

  deleteActor(id: string) {
    const url = '/actors/' + id;
    return this.http.delete(url, httpOptions);
  }

  createMovie(data: { title: string; year: number; }) {
    return this.http.post('/movies', data, httpOptions);
  }

  getMovies() {
    return this.http.get('/movies');
  }

  addActor(data: { actorName: string; movieTitle: string; }) {
    console.log(data);
    return this.http.put('/actors/' + data.actorName + '/' + data.movieTitle, httpOptions);
  }

  deleteMovie(id: string) {
    return this.http.delete('/movies/' + id, httpOptions);
  }

  addMovie(data: { movieTitle: string; actorName: string; }) {
    return this.http.put('/movies/' + data.movieTitle + '/' + data.actorName, httpOptions);
  }
}
