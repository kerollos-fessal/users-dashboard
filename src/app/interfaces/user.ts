export interface User {
      data: {
            id: number;
            email: string;
            first_name: string;
            last_name: string;
            avatar: string;
          };
          support: {
            url: string;
            text: string;
          };
}


export interface MainUser {
        id: number;
        email: string;
        first_name: string;
        last_name: string;
        avatar: string;
}