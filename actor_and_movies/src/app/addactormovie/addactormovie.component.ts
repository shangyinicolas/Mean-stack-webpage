import {Component, OnInit} from '@angular/core';
import {DatabaseService} from '../database.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-addactormovie',
  templateUrl: './addactormovie.component.html',
  styleUrls: ['./addactormovie.component.css']
})
export class AddactormovieComponent implements OnInit {

  moviesDB: any[] = [];
  actorsDB: any[] = [];
  movieTitle = '';
  fullName = '';

  constructor(private dbService: DatabaseService, private router: Router) {
  }
  ngOnInit(): void {
    this.onGetActors();
    this.onGetMovies();
  }

  onGetActors() {
    this.dbService.getActors().subscribe((data: any) => {
      this.actorsDB = data;
    });
  }
  onGetMovies() {
    this.dbService.getMovies().subscribe((data: any) => {
      this.moviesDB = data;
    });
  }
  onAddMovie() {
    const obj = {movieTitle: this.movieTitle, actorName: this.fullName};
    this.dbService.addMovie(obj).subscribe(result => {
      this.router.navigate(['/listmovies']);
    });
  }



}
