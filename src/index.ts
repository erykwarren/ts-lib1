
import * as os from 'os';

export class Foo1 {
  talk(): string {
    return 'I am Foo1. This hostname is ${os.hostname()}.';
  }
}
