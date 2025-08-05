# Node.js Deprecation Issue Writing Rules

These rules define the standard structure and format for creating Node.js deprecation documentation issues based on the analysis of existing examples.

## Document Structure

Every deprecation issue document MUST follow this exact structure:

### 1. Title
- Use descriptive filename in kebab-case (e.g., `util-log.md`, `node-zlib.md`)

### 2. Description Section
```markdown
## Description

Since [DEPRECATED_API] is deprecated ([DEPRECATION_CODE]) and has reached [STATUS] status, we should provide a codemod to replace [them/it].

- The codemod should [MAIN_TRANSFORMATION_DESCRIPTION].
- The codemod should [ADDITIONAL_REQUIREMENT_1].
- The codemod should [ADDITIONAL_REQUIREMENT_2].
- The codemod should [ADDITIONAL_REQUIREMENT_N].
```

**Required Elements:**
- Reference to the deprecated API
- Deprecation code (e.g., DEP0059, DEP0184) - Note: Some documents may omit this if not applicable
- Current deprecation status (End-of-Life, Runtime, etc.) - Note: Status may be omitted for certain types
- Bullet points describing what the codemod should do
- Use consistent language: "The codemod should..."

**Variations Found:**
- Status may be omitted: "Since `repl.builtinModules` is deprecated in Node.js v24.2.0"
- Some may focus on version rather than status: "deprecated in Node.js v23.9.0"

### 3. Additional Information Section (Optional)
```markdown
## Additional Information

Note that [DEPRECATED_API] was [REMOVED/DEPRECATED_ACTION] in Node.js [VERSION]. The [function/method/class] was deprecated because [REASON_FOR_DEPRECATION]. Instead of [DEPRECATED_API], developers should [RECOMMENDED_ALTERNATIVE].

The [DEPRECATED_API] [BRIEF_FUNCTIONALITY_DESCRIPTION].
```

**Note**: This section is optional and may be omitted in simpler deprecations

**When Present, Required Elements:**
- Version information where deprecation occurred
- Reason for deprecation
- Recommended alternatives
- Brief description of original functionality

### 4. Special Sections (When Applicable)

Some documents may include additional specialized sections:

#### Detection Strategy Section
```markdown
## Detection Strategy

The codemod should identify [PATTERN] by analyzing the context:

- [DETECTION_RULE_1]
- [DETECTION_RULE_2]
- [DETECTION_RULE_N]
```

**When to Use**: For complex deprecations where the transformation depends on context analysis

#### Important Points Section
```markdown
## Important points

- [IMPORTANT_CONSIDERATION_1]
- [IMPORTANT_CONSIDERATION_2]
```

**When to Use**: For non-deprecation codemods or when there are critical implementation constraints

#### Caveats Section
```markdown
## Caveats

- [LIMITATION_1]
- [LIMITATION_2]
```

**When to Use**: When the codemod has known limitations or when the replacement doesn't have feature parity

### 5. Examples Section
```markdown
## Examples

### Case 1: [DESCRIPTIVE_CASE_NAME] / ### Example 1: [DESCRIPTIVE_NAME]

**Before:**

```js
[CODE_EXAMPLE_BEFORE]
```

**After:**

```js
[CODE_EXAMPLE_AFTER]
```
```

**Required Elements:**
- Minimum 1-10 different case examples (varies by complexity)
- Each case must have a descriptive name
- Use either "Case N:" or "Example N:" consistently within a document
- Each case must show "Before" and "After" code blocks
- Code blocks must use `js` language identifier
- Examples should cover different usage patterns based on complexity

**Pattern Variations Found:**
- Simple deprecations: 1-6 examples
- Complex deprecations: 7-10 examples
- Migration guides: 6-8 examples with detailed scenarios

### 6. References Section
```markdown
## Refs / ## REFS

- [DEPRECATION_CODE: `DEPRECATED_API`](https://nodejs.org/api/deprecations.html#DEPRECATION_CODE_LOWERCASE)
- [Related PR/Issue title node#PR_NUMBER](https://github.com/nodejs/node/pull/PR_NUMBER)
```

**Required Elements:**
- Link to official Node.js deprecation documentation
- May include multiple deprecation links for complex cases
- May include links to relevant GitHub PRs or issues

**Variations Found:**
- Case sensitive: "Refs" vs "REFS"
- May have multiple deprecation links (e.g., util.is** functions have 15+ links)
- Some may omit GitHub PR links if not applicable

## Code Example Guidelines

### Before/After Structure
- **Before**: Show the deprecated usage pattern
- **After**: Show the modern replacement
- Both blocks must be syntactically correct JavaScript
- Use consistent formatting and indentation
- Include necessary imports/requires in examples

### Example Case Categories

The examples should cover relevant patterns based on the deprecation type:

#### For API Deprecations:
1. **Basic Usage**: Simple, straightforward cases
2. **Import Variations**: CommonJS, ESM, destructured, namespace
3. **Parameter Handling**: Different parameter patterns
4. **Context Usage**: Conditional statements, functions, callbacks
5. **Mixed Scenarios**: Integration with other APIs
6. **Edge Cases**: Complex or unusual usage patterns
7. **Alternative Suggestions**: Cases with recommended third-party alternatives

#### For Complex Context-Dependent Deprecations:
1. **Detection Scenarios**: Cases showing how to identify what needs transformation
2. **Mixed Usage**: Cases showing what should and shouldn't be transformed
3. **Sync vs Async**: Different API variations
4. **Import Handling**: How imports change based on usage

#### For Migration Guides (Non-Deprecation):
1. **Basic Patterns**: Core transformation patterns
2. **Advanced Features**: Complex API transformations
3. **Hook/Lifecycle Handling**: Special transformation scenarios
4. **Configuration Changes**: Options/config transformations
5. **Feature Limitations**: Cases showing what cannot be migrated

### Code Style Requirements
- Use double quotes for strings (consistent with project style)
- Use 2-space indentation
- Include semicolons where appropriate
- Use modern JavaScript syntax where appropriate
- Add helpful comments when suggesting alternatives
- Handle both callback and arrow function styles appropriately
- Preserve original function style unless migration requires change

### Import/Export Patterns
Based on analysis, handle these import patterns:
- CommonJS: `require('node:module')`
- ESM: `import { } from 'node:module'`
- Namespace imports: `import * as module from 'node:module'`
- Destructured imports: `const { func } = require('node:module')`
- Mixed imports: When some functions are replaced and others remain

## Language and Tone Guidelines

### Required Language Patterns
- Use "The codemod should..." for requirements
- Use "Since [API] is deprecated..." for opening statements
- Use "Note that [API] was..." for additional information
- Use present tense for current state descriptions
- Use past tense for historical information

### Language Variations Found
- **Status References**: May include specific status ("End-of-Life", "Runtime") or omit entirely
- **Version Information**: May reference specific Node.js versions where deprecation occurred
- **Requirement Language**: Consistent use of "The codemod should..." across all documents
- **Import Handling**: Specific language about import replacement patterns

### Forbidden Elements
- Do not include personal opinions
- Do not include implementation details of the codemod
- Do not include installation or usage instructions
- Do not include version compatibility matrices
- Avoid subjective language or recommendations beyond the standard alternative

## Document Types and Patterns

Based on analysis, there are four main document types:

### 1. Simple API Deprecations
- **Structure**: Description → Examples → Refs
- **Examples**: 1-6 cases
- **Focus**: Direct API replacement
- **Example**: `util.print()`, `util.types.isNativeError()`

### 2. Complex API Deprecations
- **Structure**: Description → Additional Information → Examples → Refs
- **Examples**: 5-10 cases
- **Focus**: Context-aware transformations, multiple usage patterns
- **Example**: `util.log()`, `node:zlib` classes

### 3. Context-Dependent Deprecations
- **Structure**: Description → Additional Information → Detection Strategy → Examples → Refs
- **Examples**: 4-6 cases focusing on detection scenarios
- **Focus**: Transformations that depend on context analysis
- **Example**: `fs.truncate()` with file descriptors vs paths

### 4. Migration Guides (Non-Deprecation)
- **Structure**: Description → Important Points → Examples → Caveats → Refs
- **Examples**: 6-8 comprehensive cases
- **Focus**: Complex API migrations with feature mapping
- **Example**: Mocha to Node Test Runner

## Validation Checklist

Before creating an issue document, ensure:

- [ ] Document follows appropriate structure for its type
- [ ] Description includes deprecation reference (code/version as applicable)
- [ ] Examples match the complexity and type of transformation
- [ ] All code blocks use `js` language identifier
- [ ] References section includes appropriate links
- [ ] Language follows required patterns
- [ ] No forbidden elements are included
- [ ] Examples cover relevant import/usage patterns for the deprecation type
- [ ] Code is syntactically correct and properly formatted
- [ ] Case numbering is consistent (Case N: or Example N:)

## Template Variables Reference

When creating new issues, replace these template variables:

- `[DEPRECATED_API]`: The deprecated API name (e.g., `util.log()`, `node:zlib` classes)
- `[DEPRECATION_CODE]`: Official deprecation code (e.g., DEP0059, DEP0184) - Optional
- `[STATUS]`: Current deprecation status (End-of-Life, Runtime, etc.) - Optional
- `[VERSION]`: Node.js version where deprecation occurred (e.g., v23.0.0, v24.2.0)
- `[MAIN_TRANSFORMATION_DESCRIPTION]`: Primary transformation the codemod performs
- `[REASON_FOR_DEPRECATION]`: Explanation of why the API was deprecated
- `[RECOMMENDED_ALTERNATIVE]`: Suggested replacement or alternative approach
- `[DESCRIPTIVE_CASE_NAME]`: Clear description of what the example case demonstrates
- `[CODE_EXAMPLE_BEFORE]`: Deprecated code example
- `[CODE_EXAMPLE_AFTER]`: Modern replacement code example
- `[PR_NUMBER]`: GitHub PR number related to the deprecation - Optional
- `[DETECTION_RULE_N]`: Rules for identifying transformation contexts
- `[IMPORTANT_CONSIDERATION_N]`: Critical implementation constraints
- `[LIMITATION_N]`: Known limitations or caveats