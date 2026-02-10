class Character {
  constructor(name, hp, mana, dmg) {
    this.name = name;
    this.hp = hp;
    this.mana = mana;
    this.dmg = dmg;
    this.alive = true;
  }

  takeDamage(amount) {
    this.hp -= amount;
    if (this.hp <= 0) {
      this.hp = 0;
      this.alive = false;
      console.log(`${this.name} has died.`);
    }
  }

  attack(target) {
    if (!this.alive) return;
    console.log(`${this.name} attacks ${target.name} for ${this.dmg} damage`);
    target.takeDamage(this.dmg);
  }
}
