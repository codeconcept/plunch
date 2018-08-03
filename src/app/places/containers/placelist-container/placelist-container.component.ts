import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";

// NgRx
import { Store, select } from "@ngrx/store";
import * as placeActions from "../../state/place.actions";
import * as userActions from "../../../users/state/user.actions";

import { Place } from "../../Place";
import { UserChoice } from "../../../users/UserChoice";
import { getUserId, getUserState, getUserPseudo } from "../../../auth/state/auth.selectors";
import { User } from "../../../users/User";
import { getPlaces } from "../../state/place.selectors";
import { getChoices } from "../../../users/state/userChoice.selectors";
import { map } from "rxjs/operators";

@Component({
  selector: "app-placelist-container",
  templateUrl: "./placelist-container.component.html",
  styleUrls: ["./placelist-container.component.css"]
})
export class PlacelistContainerComponent implements OnInit {
  places$: Observable<Place[]>;
  user$: Observable<User>;
  userId$: Observable<Number>;
  pseudo$: Observable<String>;
  userChoices$: Observable<UserChoice[]>;
  votes$: Observable<{}>;
  constructor(private store: Store<any>) {}

  ngOnInit() {
    this.store.dispatch(new placeActions.Load());
    this.places$ = this.store.pipe(select(getPlaces)) as Observable<Place[]>;
    this.user$ = this.store.pipe(select(getUserState)) as Observable<User>;
    this.userId$ = this.store.pipe(select(getUserId)) as Observable<Number>;
    this.pseudo$= this.store.pipe(select(getUserPseudo))
    this.userChoices$ = this.store.pipe(select(getChoices)) as Observable<UserChoice[]>;
    this.votes$ = this.userChoices$.pipe(map(choices => this.computeVotes(choices))) as Observable<any>;
  }

  addUserchoice(userChoice: UserChoice) {
    this.store.dispatch(new userActions.Choose(userChoice));
  }

  computeVotes(userChoices: UserChoice[]) {
    const votes = userChoices.reduce(function(acc, obj) {
      var key = "placeId" + obj.placeId.toString();
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push({ userId: obj.userId, pseudo: obj.pseudo });
      return acc;
    }, {});
    return votes;
  }
}
