import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseAbstractRepository } from './base/base.abstract.repository';
import { UserRepositoryInterface } from '../interfaces/users.repository.interface';
import { UserEntity } from '../entities/user.entity';

@Injectable()
export class PostRepository
    extends BaseAbstractRepository<UserEntity>
    implements UserRepositoryInterface {
    constructor(
        @InjectRepository(UserEntity)
        private readonly PostRepository: Repository<UserEntity>,
    ) {
        super(PostRepository);
    }
}
