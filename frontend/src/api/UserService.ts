import { api } from ".";

export const DeleteUserService = (userId: number) => api.delete(`clients/${userId}`);

export const CreateUserService = (newUserName: string) => api.post("clients", {name: newUserName});