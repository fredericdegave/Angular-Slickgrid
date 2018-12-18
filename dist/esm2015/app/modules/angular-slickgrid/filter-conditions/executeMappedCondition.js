/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { booleanFilterCondition } from './booleanFilterCondition';
import { dateFilterCondition } from './dateFilterCondition';
import { dateIsoFilterCondition } from './dateIsoFilterCondition';
import { dateUsShortFilterCondition } from './dateUsShortFilterCondition';
import { dateUsFilterCondition } from './dateUsFilterCondition';
import { dateUtcFilterCondition } from './dateUtcFilterCondition';
import { collectionSearchFilterCondition } from './collectionSearchFilterCondition';
import { numberFilterCondition } from './numberFilterCondition';
import { stringFilterCondition } from './stringFilterCondition';
import { FieldType } from '../models/index';
/** @type {?} */
export const executeMappedCondition = (options) => {
    // when using a multi-select ('IN' operator) we will not use the field type but instead go directly with a collection search
    /** @type {?} */
    const operator = options.operator && options.operator.toUpperCase();
    if (options && options.operator && (operator === 'IN' || operator === 'NIN' || operator === 'IN_CONTAINS' || operator === 'NIN_CONTAINS')) {
        return collectionSearchFilterCondition(options);
    }
    // execute the mapped type, or default to String condition check
    switch (options.fieldType) {
        case FieldType.boolean:
            return booleanFilterCondition(options);
        case FieldType.date:
            return dateFilterCondition(options);
        case FieldType.dateUtc:
            return dateUtcFilterCondition(options);
        case FieldType.dateIso:
            return dateIsoFilterCondition(options);
        case FieldType.dateUs:
        case FieldType.dateTimeUs:
            return dateUsFilterCondition(options);
        case FieldType.dateUsShort:
        case FieldType.dateTimeUsShort:
            return dateUsShortFilterCondition(options);
        case FieldType.number:
            return numberFilterCondition(options);
        case FieldType.string:
        default:
            return stringFilterCondition(options);
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhlY3V0ZU1hcHBlZENvbmRpdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItc2xpY2tncmlkLyIsInNvdXJjZXMiOlsiYXBwL21vZHVsZXMvYW5ndWxhci1zbGlja2dyaWQvZmlsdGVyLWNvbmRpdGlvbnMvZXhlY3V0ZU1hcHBlZENvbmRpdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDbEUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDNUQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDbEUsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDMUUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDaEUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFHbEUsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDcEYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDaEUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDaEUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGlCQUFpQixDQUFDOztBQUU1QyxNQUFNLE9BQU8sc0JBQXNCLEdBQW9CLENBQUMsT0FBOEIsRUFBRSxFQUFFOzs7VUFFbEYsUUFBUSxHQUFHLE9BQU8sQ0FBQyxRQUFRLElBQUksT0FBTyxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUU7SUFDbkUsSUFBSSxPQUFPLElBQUksT0FBTyxDQUFDLFFBQVEsSUFBSSxDQUFDLFFBQVEsS0FBSyxJQUFJLElBQUksUUFBUSxLQUFLLEtBQUssSUFBSSxRQUFRLEtBQUssYUFBYSxJQUFJLFFBQVEsS0FBSyxjQUFjLENBQUMsRUFBRTtRQUN6SSxPQUFPLCtCQUErQixDQUFDLE9BQU8sQ0FBQyxDQUFDO0tBQ2pEO0lBRUQsZ0VBQWdFO0lBQ2hFLFFBQVEsT0FBTyxDQUFDLFNBQVMsRUFBRTtRQUN6QixLQUFLLFNBQVMsQ0FBQyxPQUFPO1lBQ3BCLE9BQU8sc0JBQXNCLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDekMsS0FBSyxTQUFTLENBQUMsSUFBSTtZQUNqQixPQUFPLG1CQUFtQixDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3RDLEtBQUssU0FBUyxDQUFDLE9BQU87WUFDcEIsT0FBTyxzQkFBc0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN6QyxLQUFLLFNBQVMsQ0FBQyxPQUFPO1lBQ3BCLE9BQU8sc0JBQXNCLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDekMsS0FBSyxTQUFTLENBQUMsTUFBTSxDQUFDO1FBQ3RCLEtBQUssU0FBUyxDQUFDLFVBQVU7WUFDdkIsT0FBTyxxQkFBcUIsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN4QyxLQUFLLFNBQVMsQ0FBQyxXQUFXLENBQUM7UUFDM0IsS0FBSyxTQUFTLENBQUMsZUFBZTtZQUM1QixPQUFPLDBCQUEwQixDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzdDLEtBQUssU0FBUyxDQUFDLE1BQU07WUFDbkIsT0FBTyxxQkFBcUIsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN4QyxLQUFLLFNBQVMsQ0FBQyxNQUFNLENBQUM7UUFDdEI7WUFDRSxPQUFPLHFCQUFxQixDQUFDLE9BQU8sQ0FBQyxDQUFDO0tBQ3pDO0FBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGJvb2xlYW5GaWx0ZXJDb25kaXRpb24gfSBmcm9tICcuL2Jvb2xlYW5GaWx0ZXJDb25kaXRpb24nO1xyXG5pbXBvcnQgeyBkYXRlRmlsdGVyQ29uZGl0aW9uIH0gZnJvbSAnLi9kYXRlRmlsdGVyQ29uZGl0aW9uJztcclxuaW1wb3J0IHsgZGF0ZUlzb0ZpbHRlckNvbmRpdGlvbiB9IGZyb20gJy4vZGF0ZUlzb0ZpbHRlckNvbmRpdGlvbic7XHJcbmltcG9ydCB7IGRhdGVVc1Nob3J0RmlsdGVyQ29uZGl0aW9uIH0gZnJvbSAnLi9kYXRlVXNTaG9ydEZpbHRlckNvbmRpdGlvbic7XHJcbmltcG9ydCB7IGRhdGVVc0ZpbHRlckNvbmRpdGlvbiB9IGZyb20gJy4vZGF0ZVVzRmlsdGVyQ29uZGl0aW9uJztcclxuaW1wb3J0IHsgZGF0ZVV0Y0ZpbHRlckNvbmRpdGlvbiB9IGZyb20gJy4vZGF0ZVV0Y0ZpbHRlckNvbmRpdGlvbic7XHJcbmltcG9ydCB7IEZpbHRlckNvbmRpdGlvbk9wdGlvbiB9IGZyb20gJy4vLi4vbW9kZWxzL2ZpbHRlckNvbmRpdGlvbk9wdGlvbi5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBGaWx0ZXJDb25kaXRpb24gfSBmcm9tICcuLi9tb2RlbHMvZmlsdGVyQ29uZGl0aW9uLmludGVyZmFjZSc7XHJcbmltcG9ydCB7IGNvbGxlY3Rpb25TZWFyY2hGaWx0ZXJDb25kaXRpb24gfSBmcm9tICcuL2NvbGxlY3Rpb25TZWFyY2hGaWx0ZXJDb25kaXRpb24nO1xyXG5pbXBvcnQgeyBudW1iZXJGaWx0ZXJDb25kaXRpb24gfSBmcm9tICcuL251bWJlckZpbHRlckNvbmRpdGlvbic7XHJcbmltcG9ydCB7IHN0cmluZ0ZpbHRlckNvbmRpdGlvbiB9IGZyb20gJy4vc3RyaW5nRmlsdGVyQ29uZGl0aW9uJztcclxuaW1wb3J0IHsgRmllbGRUeXBlIH0gZnJvbSAnLi4vbW9kZWxzL2luZGV4JztcclxuXHJcbmV4cG9ydCBjb25zdCBleGVjdXRlTWFwcGVkQ29uZGl0aW9uOiBGaWx0ZXJDb25kaXRpb24gPSAob3B0aW9uczogRmlsdGVyQ29uZGl0aW9uT3B0aW9uKSA9PiB7XHJcbiAgLy8gd2hlbiB1c2luZyBhIG11bHRpLXNlbGVjdCAoJ0lOJyBvcGVyYXRvcikgd2Ugd2lsbCBub3QgdXNlIHRoZSBmaWVsZCB0eXBlIGJ1dCBpbnN0ZWFkIGdvIGRpcmVjdGx5IHdpdGggYSBjb2xsZWN0aW9uIHNlYXJjaFxyXG4gIGNvbnN0IG9wZXJhdG9yID0gb3B0aW9ucy5vcGVyYXRvciAmJiBvcHRpb25zLm9wZXJhdG9yLnRvVXBwZXJDYXNlKCk7XHJcbiAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5vcGVyYXRvciAmJiAob3BlcmF0b3IgPT09ICdJTicgfHwgb3BlcmF0b3IgPT09ICdOSU4nIHx8IG9wZXJhdG9yID09PSAnSU5fQ09OVEFJTlMnIHx8IG9wZXJhdG9yID09PSAnTklOX0NPTlRBSU5TJykpIHtcclxuICAgIHJldHVybiBjb2xsZWN0aW9uU2VhcmNoRmlsdGVyQ29uZGl0aW9uKG9wdGlvbnMpO1xyXG4gIH1cclxuXHJcbiAgLy8gZXhlY3V0ZSB0aGUgbWFwcGVkIHR5cGUsIG9yIGRlZmF1bHQgdG8gU3RyaW5nIGNvbmRpdGlvbiBjaGVja1xyXG4gIHN3aXRjaCAob3B0aW9ucy5maWVsZFR5cGUpIHtcclxuICAgIGNhc2UgRmllbGRUeXBlLmJvb2xlYW46XHJcbiAgICAgIHJldHVybiBib29sZWFuRmlsdGVyQ29uZGl0aW9uKG9wdGlvbnMpO1xyXG4gICAgY2FzZSBGaWVsZFR5cGUuZGF0ZTpcclxuICAgICAgcmV0dXJuIGRhdGVGaWx0ZXJDb25kaXRpb24ob3B0aW9ucyk7XHJcbiAgICBjYXNlIEZpZWxkVHlwZS5kYXRlVXRjOlxyXG4gICAgICByZXR1cm4gZGF0ZVV0Y0ZpbHRlckNvbmRpdGlvbihvcHRpb25zKTtcclxuICAgIGNhc2UgRmllbGRUeXBlLmRhdGVJc286XHJcbiAgICAgIHJldHVybiBkYXRlSXNvRmlsdGVyQ29uZGl0aW9uKG9wdGlvbnMpO1xyXG4gICAgY2FzZSBGaWVsZFR5cGUuZGF0ZVVzOlxyXG4gICAgY2FzZSBGaWVsZFR5cGUuZGF0ZVRpbWVVczpcclxuICAgICAgcmV0dXJuIGRhdGVVc0ZpbHRlckNvbmRpdGlvbihvcHRpb25zKTtcclxuICAgIGNhc2UgRmllbGRUeXBlLmRhdGVVc1Nob3J0OlxyXG4gICAgY2FzZSBGaWVsZFR5cGUuZGF0ZVRpbWVVc1Nob3J0OlxyXG4gICAgICByZXR1cm4gZGF0ZVVzU2hvcnRGaWx0ZXJDb25kaXRpb24ob3B0aW9ucyk7XHJcbiAgICBjYXNlIEZpZWxkVHlwZS5udW1iZXI6XHJcbiAgICAgIHJldHVybiBudW1iZXJGaWx0ZXJDb25kaXRpb24ob3B0aW9ucyk7XHJcbiAgICBjYXNlIEZpZWxkVHlwZS5zdHJpbmc6XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RyaW5nRmlsdGVyQ29uZGl0aW9uKG9wdGlvbnMpO1xyXG4gIH1cclxufTtcclxuIl19