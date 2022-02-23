export class CreateMessageCommand {
  constructor(
    public readonly heroId: string,
    public readonly dragonId: string,
  ) {}
}
