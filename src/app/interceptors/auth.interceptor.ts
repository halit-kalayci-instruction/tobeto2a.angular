import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  // req'i değiştirme

  // read-only
  let newRequest = req.clone({ setHeaders: { Authorization: 'Bearer myjwt' } });

  return next(newRequest);
};
