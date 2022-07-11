<?php

namespace App\Enums;

use BenSampo\Enum\Enum;

/**
 * @method static static OptionOne()
 * @method static static OptionTwo()
 * @method static static OptionThree()
 */
final class RoomMode extends Enum
{
    const GAME_12 = 0;
    const GAME_18 = 1;
}
