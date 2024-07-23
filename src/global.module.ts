import { Global, Module } from "@nestjs/common";
import { tursoConn } from "./connection/Connection";
import { ConfigModule } from "@nestjs/config";

@Global()
@Module({  
    imports: [ConfigModule.forRoot({
        envFilePath: ['.env'],
        isGlobal: true,
        cache: true,
      })],
  providers: [
    {
      provide: 'DBCONN',
      useValue: tursoConn(),
    }
  ],
  exports: ['DBCONN'],
})
export class GlobalModule {}