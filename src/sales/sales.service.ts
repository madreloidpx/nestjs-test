import { Injectable } from '@nestjs/common';
import { createReadStream } from 'fs';
import { join } from 'path';
import { parseStream } from 'fast-csv';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Sale } from './sale.entity';

@Injectable()
export class SalesService {
  constructor(
    @InjectRepository(Sale)
    private saleRepository: Repository<Sale>,
  ){}

  async parse(filename) {
    const filepath = join(__dirname, '..', 'public', filename);
    console.log(filepath);
    const stream = createReadStream(filepath, 'utf8');
    parseStream(stream, { headers: false })
      .on('data', (data) => console.log(data))
      .on('end', () => console.log('done'));
  }

  //findOnRange(start ?: Date, end ?: Date): Promise<Sale[]> {}
}
