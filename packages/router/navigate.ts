type Router = {
  push: (path: string) => void;
};

export function createNavigateToDetail(router: Router) {
  return (userId: string) => router.push(`/user/${userId}`);
}

export function createNavigateToUser(router: Router) {
  return () => router.push("/user");
}
