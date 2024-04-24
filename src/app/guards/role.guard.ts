import { CanActivateFn, Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { JWT_ROLES } from '../constants/jwtAttributes';
import { inject } from '@angular/core';

export const roleGuard: CanActivateFn = (route, state) => {
  // token'ı elde et?
  let router = inject(Router);

  let token = localStorage.getItem('token'); // TODO: token service vb.
  if (token == null) return false;

  let decodedToken = jwtDecode<any>(token);

  let userRoles: string[] = decodedToken[JWT_ROLES];
  let requiredRoles: string[] = route.data['requiredRoles'] || [];
  let hasRole = false;

  requiredRoles.forEach((role) => {
    if (userRoles.includes(role)) hasRole = true;
  });

  if (!hasRole) router.navigateByUrl('/login');

  return hasRole;
};
