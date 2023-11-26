import { UserService } from 'src/modules/user/user.service';

export function UserRoleMiddleware(userService: UserService) {
  return async (req, res, next) => {
    if (req.user) {
      const userRole = await userService.getRoleForUser(req.user.id);
      req.userRole = userRole;
    }
    next();
  };
}
