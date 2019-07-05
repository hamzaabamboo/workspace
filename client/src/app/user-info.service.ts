import { Injectable } from "@angular/core";
import { Apollo } from "apollo-angular";
import gql from "graphql-tag";

@Injectable({
  providedIn: "root"
})
export class UserInfoService {
  constructor(private apollo: Apollo) {}

  async getExistingUser(fnamet: string, lnamet: string, part: string) {
    const { data } = await this.apollo
      .query<{ checkExisting: any }>({
        query: gql`
          query existingUser($fnamet: String!, $lnamet: String!, $part: Part!) {
            checkExisting(fnamet: $fnamet, lnamet: $lnamet, part: $part) {
              initial
              fnamet
              lnamet
              fnamee
              lnamee
              nickname
              chulaid
              parts
              position
              faculty
              yearInChula
              yearInBand
              chulaid
              mobile
              office
              email
              homeAddress {
                line1
                line2
                line3
                postcode
              }
              homePhone
              homeFax
              mobile
              office
              officeAddress {
                line1
                line2
                line3
                postcode
              }
              officePhone
              officeFax
            }
          }
        `,
        variables: { fnamet, lnamet, part }
      })
      .toPromise();
    return data.checkExisting;
  }
}
