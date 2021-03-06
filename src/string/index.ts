import {NgModule} from '@angular/core';

import {CamelizePipe} from './camelize.pipe';
import {CenterPadPipe} from './center-pad.pipe';
import {EndsWithPipe} from './ends-with.pipe';
import {LatinizePipe} from './latinize.pipe';
import {LeftPadPipe} from './left-pad.pipe';
import {LeftTrimPipe} from './ltrim.pipe';
import {MatchPipe} from './match.pipe';
import {PhonePipe} from './phone.pipe';
import {RepeatPipe} from './repeat.pipe';
import {RightPadPipe} from './right-pad.pipe';
import {RightTrimPipe} from './rtrim.pipe';
import {SlugifyPipe} from './slugify.pipe';
import {SplitPipe} from './split.pipe';
import {StartsWithPipe} from './starts-with.pipe';
import {StringularPipe} from './stringular.pipe';
import {StripTagsPipe} from './strip-tags.pipe';
import {TestPipe} from './test.pipe';
import {TitleizePipe} from './titleize.pipe';
import {TrimPipe} from './trim.pipe';
import {TruncatePipe} from './truncate.pipe';
import {UcfirstPipe} from './ucfirst.pipe';
import {UnderscorePipe} from './underscore.pipe';
import {UriComponentEncodePipe} from './uri-component-encode.pipe';
import {UriEncodePipe} from './uri-encode.pipe';
import {WrapPipe} from './wrap.pipe';

export * from './camelize.pipe';
export * from './center-pad.pipe';
export * from './ends-with.pipe';
export * from './latinize.pipe';
export * from './left-pad.pipe';
export * from './ltrim.pipe';
export * from './match.pipe';
export * from './phone.pipe';
export * from './right-pad.pipe';
export * from './repeat.pipe';
export * from './rtrim.pipe';
export * from './slugify.pipe';
export * from './split.pipe';
export * from './starts-with.pipe';
export * from './stringular.pipe';
export * from './strip-tags.pipe';
export * from './test.pipe';
export * from './titleize.pipe';
export * from './trim.pipe';
export * from './truncate.pipe';
export * from './ucfirst.pipe';
export * from './underscore.pipe';
export * from './uri-component-encode.pipe';
export * from './uri-encode.pipe';
export * from './wrap.pipe';

@NgModule({
  declarations: [
    CamelizePipe,
    CenterPadPipe,
    EndsWithPipe,
    LatinizePipe,
    LeftPadPipe,
    LeftTrimPipe,
    MatchPipe,
    PhonePipe,
    RepeatPipe,
    RightPadPipe,
    RightTrimPipe,
    SlugifyPipe,
    SplitPipe,
    StartsWithPipe,
    StringularPipe,
    StripTagsPipe,
    TestPipe,
    TitleizePipe,
    TrimPipe,
    TruncatePipe,
    UcfirstPipe,
    UnderscorePipe,
    UriComponentEncodePipe,
    UriEncodePipe,
    WrapPipe
  ],
  exports: [
    CamelizePipe,
    CenterPadPipe,
    EndsWithPipe,
    LatinizePipe,
    LeftPadPipe,
    LeftTrimPipe,
    MatchPipe,
    PhonePipe,
    RepeatPipe,
    RightPadPipe,
    RightTrimPipe,
    SlugifyPipe,
    SplitPipe,
    StartsWithPipe,
    StringularPipe,
    StripTagsPipe,
    TestPipe,
    TitleizePipe,
    TrimPipe,
    TruncatePipe,
    UcfirstPipe,
    UnderscorePipe,
    UriComponentEncodePipe,
    UriEncodePipe,
    WrapPipe
  ]
})
export class StringPipesModule {
}
