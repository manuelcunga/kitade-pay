import { CreateUserController } from "./createUserController";
import { Test, TestingModule } from '@nestjs/testing';
import { CreateUserUseCases } from "../../../../@core/domain/usecases/create/create-user";
import { CreateUserDTO } from "../../dtos/createUserDTO";
import { UserTypeorm } from "src/infra/database/typeorm/entities/User-entities-typeorm";

// let newUser = new UserTypeorm({ })


describe("Create user Controller", ()=>{

  let usercontroller: CreateUserController
  let userService: CreateUserUseCases

  beforeEach(async ()=>{
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CreateUserController],
      providers: [
        {
          provide: CreateUserUseCases,
          useValue: {
            create: jest.fn()
          }
        }
      ]
    }).compile()

    usercontroller = module.get<CreateUserController>(CreateUserController)
    userService  = module.get<CreateUserUseCases>(CreateUserUseCases)
  })

  it("should be defined", ()=>{
    expect(usercontroller).toBeDefined()
    expect(userService).toBeDefined()
  })


  describe("create user", ()=>{
    it("should be create a new user", async ()=>{
      let date = new Date()

      const data : CreateUserDTO = {
        name: "Felix",
        email: "jose12@gmail.com",
        phone: 92323232,
        birth_date: "12/02/2000",
        password: "232323232",
        createdAt: date
      }

        const user = await usercontroller.handle(data)
        expect(user.name).toBe("Felix")
        expect(user.email).toBe("jose12@gmail.com")
        expect(user.phone).toBe("92323232")
        expect(user.birth_date).toBe("12/02/2000")
        expect(user.createdAt).toBe("232323232")
        expect(user.createdAt).toBe(date)
    } )
  })
})


