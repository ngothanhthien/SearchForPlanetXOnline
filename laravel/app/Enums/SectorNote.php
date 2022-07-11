<?php

namespace App\Enums;

use BenSampo\Enum\Enum;

/**
 * @method static static OptionOne()
 * @method static static OptionTwo()
 * @method static static OptionThree()
 */
final class SectorNote extends Enum
{
    const CROSS_MARK=1;
    const SURE_MARK=0;
}
