import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  // req'i değiştirme

  // read-only
  console.log('AuthInterceptor');
  let newRequest = req.clone({ setHeaders: { Authorization: 'Bearer myjwt' } });

  return next(newRequest);
};
