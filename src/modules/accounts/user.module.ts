import { Module } from '@nestjs/common';
import { CreateUserController } from './controller/create/createUserController';
import { getDataSourceToken, TypeOrmModule } from '@nestjs/typeorm';
import { CreateUserService } from './services/create/createUser.service';
import { UserRepository } from 'src/infra/database/typeorm/repositories/users/UserRepositories';
import { FindAllUsersController } from './controller/findAll/findAllUsers.controller';
import { FindAllUserServuce } from './services/findAll/findAllUser.service';
import { UpdateUserController } from './controller/update/updateUser.controller';
import { UpdateUserService } from './services/update/updateUser.service';
import { LoginController } from './controller/login/login.controller';
import { LoginService } from './services/login/login.service';
import { JwtModule } from '@nestjs/jwt';
import { LocalStrategy } from './services/jwt-strategy/local-jwt.strategy.service';
import { JwtStrategy } from './services/jwt-strategy/jwt.strategy.service';
import { UserTypeorm } from 'src/infra/database/typeorm/entities/User-entities-typeorm';
import { CreateUserUseCases } from 'src/@core/domain/usecases/create/create-user';
import { DataSource } from 'typeorm';
import { IUserRepository } from 'src/@core/domain/interface/IuserRespository';

@Module({
  controllers: [
    CreateUserController,
    UpdateUserController,
    FindAllUsersController,
    LoginController,
  ],
  providers: [
    CreateUserService,
    FindAllUserServuce,
    UpdateUserService,
    LoginService,
    LocalStrategy,
    JwtStrategy,

    {
      provide: UserRepository,
      useFactory: (dataSource: DataSource) => {
        return new UserRepository(
          dataSource.getRepository(UserTypeorm),
        );
      },
      inject: [getDataSourceToken()],
    },
    {
      provide: CreateUserUseCases,
      useFactory: (repo: IUserRepository) => {
        return new CreateUserUseCases(repo);
      },
      inject: [UserRepository],
    },
  ],

  imports: [
    JwtModule.register({
      privateKey: process.env.JWT_KEY,
      secretOrPrivateKey: process.env.JWT_KEY,
      signOptions: {
        expiresIn: '2d',
      },
    }),
    TypeOrmModule.forFeature([UserTypeorm]),
  ],

  exports: [TypeOrmModule],
})
export class UserModule {}
