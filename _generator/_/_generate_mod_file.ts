// Copyright 2023 mineejo. All rights reserved. MIT license.

import { MOD_FILE } from "../_generator_constants.ts";
import { fileExports } from "../_generator.ts";
import { sep } from "https://deno.land/std@0.208.0/path/mod.ts";

export async function generateModFile(
  comments: string,
  content: string,
): Promise<void> {
  fileExports.push(`export * from ".${sep}wrap_ansi16.ts"`);

  try {
    await Deno.writeFile(
      MOD_FILE,
      new TextEncoder().encode(
        comments +
          "/**\n" +
          " * Color convert is a set of conversion functions and automated\n" +
          " * conversions of color models and formats.\n" +
          " *\n" +
          " * @module\n" +
          " */\n\n" +
          content,
      ),
    );
  } catch (error) {
    console.error(error);
  }
}