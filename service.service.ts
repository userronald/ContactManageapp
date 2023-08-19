import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() { }

  contacts=[
    {
          'firstName':'Sahaya',
       'lastName': 'Ronaldo',
         'status1': 'active',
         'status2':'inactive',
        },
        {
          'firstName':'Khalil',
       'lastName': 'Ibrahim',
         'status1': 'active',
         'status2':'inactive',
        },
        {
          'firstName':'Gowri',
       'lastName': 'Shankar',
         'status1': 'active',
         'status2':'inactive',
        },
        {
          'firstName':'Cilian',
       'lastName': 'Murphy',
         'status1': 'active',
         'status2':'inactive',
        },
        {
          'firstName':'Marlyn',
       'lastName': 'Manroe',
         'status1': 'active',
         'status2':'inactive',
        },
        {
          'firstName':'Che',
       'lastName': 'Guera',
         'status1': 'active',
         'status2':'inactive',
        },
      ]

}
