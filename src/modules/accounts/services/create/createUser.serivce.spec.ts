import { UserTypeorm } from "../../../../infra/database/typeorm/entities/User-entities-typeorm";
import { UserRepository } from "../../../../infra/database/typeorm/repositories/users/UserRepositories";
import { DataSource, Repository } from "typeorm";
import { CreateUserDTO } from "../../dtos/createUserDTO";
import { CreateUserService } from "./createUser.service";

describe('UserService Test', () => {
  let dataSource: DataSource;
  let ormRepo: Repository<UserTypeorm>;
  let repository: UserRepository;
  let bankAccountService: CreateUserService;

  beforeEach(async () => {
    dataSource = new DataSource({
      type: 'sqlite',
      database: ':memory:',
      synchronize: true,
      logging: true,
      entities: [UserTypeorm],
    });
    await dataSource.initialize();
    ormRepo = dataSource.getRepository(UserTypeorm);
    repository = new UserRepository(ormRepo);
    bankAccountService = new CreateUserService(repository);
  });

  it('should create a new user', async () => {
    let data_nasc = new Date()
    let createdAT = new  Date()

    const userBody: CreateUserDTO = {
      name: "Manuel",
      email: "manuel@gmail.com",
      phone: 929392329,
      password: "12345",
      birth_date: data_nasc,
      createdAt: createdAT
    }
    await bankAccountService.execute(userBody);
    const user = await repository.findByEmail(userBody.email)
    // expect(user.id).toBe('123');
    expect(user.name).toBe("Manuel");
    expect(user.email).toBe("manuel@gmail.com");
    expect(user.phone).toBe(929392329);
    expect(user.password).toBe("12345");
    expect(user.birth_date).toBe(data_nasc);
    expect(user.createdAt).toBe(createdAT);

  });
});