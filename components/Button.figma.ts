// =============================================================================
// WORKED EXAMPLE: Button component
// =============================================================================
// This file connects a Figma Button component to the Button component in your
// codebase. Read through it once — then use _template.figma.ts for new ones.
//
// HOW IT WORKS:
// When a developer selects this component in Figma Dev Mode, they'll see the
// code snippet defined in `example` below — with real values filled in based
// on the variant/properties selected in the design.
// =============================================================================


// *** REPLACE THIS URL with your own component's URL ***
// In Figma: right-click your Button component in the left panel
// → "Copy link to selection" → paste it here (replace everything after url=)
// url=https://www.figma.com/design/YOUR_FILE_KEY/Your-File?node-id=YOUR_NODE_ID

import figma from 'figma'

// `figma.selectedInstance` gives you access to the properties of whichever
// variant of the Button the developer has selected in Figma.
const instance = figma.selectedInstance


// -----------------------------------------------------------------------------
// PROPERTY MAPPING
// Map each Figma property to a variable you'll use in the snippet below.
// The string in quotes must exactly match the property name in Figma.
// (Check the right panel in Figma when you've selected the component.)
// -----------------------------------------------------------------------------

// getString — for text content properties
const label = instance.getString('Label')
// ^ Replace 'Label' with whatever your Figma text property is called

// getBoolean — for true/false toggles
const disabled = instance.getBoolean('Disabled')
// ^ Replace 'Disabled' with the name of your boolean property, or delete this
//   line if your Button doesn't have one

// getEnum — for variant properties with multiple options
const variant = instance.getEnum('Variant', {
  // Left side: the name as it appears in Figma
  // Right side: the value as it appears in your code
  Primary: 'primary',
  Secondary: 'secondary',
  Danger: 'danger',
})
// ^ Update the options to match your Figma variants exactly

const size = instance.getEnum('Size', {
  Large: 'lg',
  Medium: 'md',
  Small: 'sm',
})
// ^ Delete this block if your Button doesn't have a Size property


// -----------------------------------------------------------------------------
// THE SNIPPET
// This is the code that will appear in Figma's Inspect panel.
// Write it exactly as a developer would use the component in their codebase.
// The ${} placeholders get replaced with real values from the selected instance.
// -----------------------------------------------------------------------------

export default {
  example: figma.code`
    <Button
      variant={${variant}}
      size={${size}}
      disabled={${disabled}}
    >
      ${label}
    </Button>
  `,

  // The import statement shown above the snippet in Dev Mode.
  // *** REPLACE with the actual import path from your codebase ***
  imports: ['import { Button } from "@your-org/design-system"'],

  // A stable ID for this connection. Can be anything — just keep it unique
  // across your .figma.ts files.
  id: 'button',
}
