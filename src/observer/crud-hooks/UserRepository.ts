export enum HOOK_TYPES {
  created = "created",
  updated = "updated",
  removed = "removed",
}

export interface UserDto {
  id?: number;
  name: string;
  age: number;
}

export class UserRepository {
  private store: Array<UserDto> = [];
  private hooks: {
    [key in HOOK_TYPES]: Array<(data: UserDto) => void>;
  } = {
    created: [],
    updated: [],
    removed: [],
  };

  create(user: UserDto): number {
    user.id = Math.floor(Math.random() * 150000);
    this.store.push(user);
    this.callHooks(HOOK_TYPES.created, user);
    return user.id;
  }
  update(id: number, data: UserDto): void {
    const user = this.store.find((u) => u.id === id);
    if (!user) {
      throw new Error("User not found!");
    }
    user.name = data.name;
    user.age = data.age;

    this.callHooks(HOOK_TYPES.updated, user);
  }

  remove(id: number): void {
    const user = this.store.find((u) => u.id === id);
    if (user) {
      this.store = this.store.filter((u) => u.id !== id);
      this.callHooks(HOOK_TYPES.removed, user);
    }
  }

  addHook(type: HOOK_TYPES, callback: (data: UserDto) => void): void {
    this.hooks[type].push(callback);
  }

  private callHooks(type: HOOK_TYPES, data: UserDto) {
    this.hooks[type].forEach((cb) => {
      cb(data);
    });
  }
}
