export class Response<T> {
  constructor(
        public isError: boolean,
        public data: T | null,
        public status: number,
        public message: string,
  ) {}
}
