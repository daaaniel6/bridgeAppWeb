import { Municipality } from '../departaments/municipality';
import { User } from '../user/user';
import { Channel } from './channel/channel';
import { GeneralData } from './general-data';
import { NonStructuralElements } from './nonStructuralElements/non-structural-elements';
import { Other } from './other/other';
import { Pile } from './pile';
import { Stretch } from './stretch';
import { Superstructure } from './superstructure';

export interface Bridge {
  bridgeId?: number;
  name?: string;
  code?: null;
  route?: null;
  mileage?: null;
  pavedRoute?: null;
  horizontalAlignment?: null;
  skew?: null;
  northUtmCoordinates?: null;
  eastUtmCoordinates?: null;
  populationBefore?: null;
  populationAfter?: null;
  status?: string;
  trafficLight?: null;
  evaluationStartDate?: Date;
  evaluationEndDate?: Date;
  long1?: null;
  lat?: null;
  type?: null;
  extra?: null;
  stretchList?: Stretch[];
  imageList?: any[];
  blueprintList?: any[];
  stapesList?: any[];
  commentList?: any[];
  sensorList?: any[];
  channelChannelId?: Channel;
  generalDataGeneralDataId?: GeneralData;
  municipalityMunicipalityId?: Municipality;
  nonStructuralElementsNonStructuralElementsId?: NonStructuralElements;
  otherOtherId?: Other;
  pilePileId?: Pile;
  superstructureSuperstructureId?: Superstructure;
  user?: User | null;
}
