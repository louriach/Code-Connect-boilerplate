// =============================================================================
// TEMPLATE — copy this file for each new component you want to connect
// =============================================================================
// HOW TO USE:
//   1. Copy this file and rename it to match your component, e.g. Card.figma.ts
//   2. Right-click your component in Figma (left panel) → Copy link to selection
//   3. Paste that URL after url= on the line below
//   4. Map your component's properties (see the examples below)
//   5. Write the code snippet as you'd use the component in real code
//   6. Run `npm run publish`
// =============================================================================


// *** REPLACE: paste your Figma component URL after url= ***
// url=https://www.figma.com/design/YOUR_FILE_KEY/Your-File?node-id=YOUR_NODE_ID

import figma from 'figma'

const instance = figma.selectedInstance


// -----------------------------------------------------------------------------
// PROPERTY MAPPING
// Delete the examples you don't need. Add more by copying the patterns.
// The string in quotes must exactly match the property name in Figma.
// -----------------------------------------------------------------------------

// For text content (e.g. a label, placeholder, heading):
// const label = instance.getString('REPLACE_WITH_FIGMA_PROPERTY_NAME')

// For true/false toggles (e.g. disabled, loading, isActive):
// const disabled = instance.getBoolean('REPLACE_WITH_FIGMA_PROPERTY_NAME')

// For variants or options with multiple values (e.g. size, type, theme):
// const variant = instance.getEnum('REPLACE_WITH_FIGMA_PROPERTY_NAME', {
//   FigmaOptionName: 'code-value',   // ← left: Figma name, right: code value
//   AnotherOption:   'another-value',
// })


// -----------------------------------------------------------------------------
// SNIPPET
// Write the code exactly as a developer would use this component.
// Replace the example below with your actual component name and props.
// -----------------------------------------------------------------------------

export default {
  example: figma.code`
    <YourComponent>
      {/* Replace this with your real snippet */}
    </YourComponent>
  `,

  // *** REPLACE: the import path from your codebase ***
  imports: ['import { YourComponent } from "@your-org/design-system"'],

  // *** REPLACE: a unique ID for this component (lowercase, no spaces) ***
  id: 'your-component-name',
}
