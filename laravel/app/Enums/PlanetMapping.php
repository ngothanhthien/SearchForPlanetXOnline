<?php

namespace App\Enums;

use BenSampo\Enum\Enum;

/**
 * @method static static OptionOne()
 * @method static static OptionTwo()
 * @method static static OptionThree()
 */
final class PlanetMapping extends Enum
{
  const  EMPTY= 0;
  const COMET= 3;
  const DWARF_PLANET= 2;
  const GAS_CLOUD= 4;
  const ASTEROID= 1;
  const X= 9;
}
