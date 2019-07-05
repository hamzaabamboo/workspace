import * as moduleAlias from 'module-alias';
import { join } from 'path';

moduleAlias.addAliases({
	'@src': __dirname
});
moduleAlias();
