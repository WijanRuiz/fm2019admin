import { Injectable } from '@nestjs/common';
import { Player } from './entities/player.entity';
import { Repository, UpdateResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PlayerService {
  constructor(
    @InjectRepository(Player)
    private playerRepository: Repository<Player>,
  ) {}
  /*create(createPlayerDto: CreatePlayerDto) {
    return this.playerRepository.create(createPlayerDto);
  }*/

  findAll(): Promise<Player[]> {
    return this.playerRepository.find();
  }

  findOne(id: number): Promise<Player> {
    return this.playerRepository.findOne(id);
  }

  async create(contact: Player): Promise<Player> {
    return await this.playerRepository.save(contact);
  }

  async update(player: Player): Promise<UpdateResult> {
    return await this.playerRepository.update(player.id, player);
  }

  async remove(id: number): Promise<void> {
    await this.playerRepository.delete(id);
  }
}
