import { UserTypeorm } from "../../../../infra/database/typeorm/entities/User-entities-typeorm";
import { UserRepository } from "../../../../infra/database/typeorm/repositories/users/UserRepositories";
import { DataSource, Repository } from "typeorm";
import { CreateUserDTO } from "../../dtos/createUserDTO";
import { CreateUserService } from "./createUser.service";
import { CreateUserUseCases } from "../../../../@core/domain/usecases/create/create-user";

describe("UserService Test", () => {
  let dataSource: DataSource;
  let ormRepo: Repository<UserTypeorm>;
  let repository: UserRepository;
  let bankAccountService: CreateUserUseCases;

  beforeEach(async () => {
    dataSource = new DataSource({
      type: "sqlite",
      database: ":memory:",
      synchronize: true,
      logging: true,
      entities: [UserTypeorm],
    });
    await dataSource.initialize();
    ormRepo = dataSource.getRepository(UserTypeorm);
    repository = new UserRepository(ormRepo);
    bankAccountService = new CreateUserUseCases(repository);
  });

  it("should create a new user", async () => {
    let data_nasc = new Date();
    let date = new Date();

    const userBody: CreateUserDTO = {
      name: "Manuel",
      email: "jose12@gmail.com",
      phone: 92323232,
      birth_date: "12/02/2000",
      password: "232323232",
      createdAt: date,
    };

    
    await bankAccountService.create(
      userBody.name,
      userBody.email,
      userBody.phone,
      userBody.birth_date,
      userBody.password,
      userBody.createdAt
    );
    const user = await repository.findByEmail(userBody.email);
    // expect(user.id).toBe('123');
    expect(user.name).toBe("Manuel");
    expect(user.email).toBe("jose12@gmail.com");
    expect(user.phone).toBe(92323232);
    expect(user.birth_date).toBe("12/02/2000");
    expect(user.password).toBe("232323232");
    expect(user.createdAt).toBe(date);
  });
});
