import { Users } from "./User";

describe('User unit test', () => {
  it('should create a new user', () => {
    let data = new Date()
    const user = new Users("Manuel", "manuel@gmail.com", 1234,"123456","12/02/2000", data);
    console.log(user)
    expect(user.name).toBe("Manuel")
    expect(user.email).toBe("manuel@gmail.com")
    expect(user.phone).toBe(1234)
    expect(user.password).toBe("123456")
    expect(user.birth_date).toBe("12/02/2000")
  });
  
});
