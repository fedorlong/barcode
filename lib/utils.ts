import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { SymDesc } from "@/types/barcode";
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatBarcodeOptions(symdesc: SymDesc) {
  const opts = [];
  const temps = [];
  for (const id in symdesc) {
    temps.push(symdesc[id]);
  }
  temps.sort(function (a,b) { return a.desc < b.desc ? -1 : 1 });
  for (let i = 0; i < temps.length; i++) {
    opts.push({
      value: temps[i].sym,
      label: temps[i].desc,
    });
  }
  return opts;
}

export function getDefaultSpecificOptions(optsStr: string) {
  console.log('121',optsStr);
  if (!optsStr) return {};
  // Convert the options to an object.
  const opts: Record<string, string | boolean | number> = {};
  const aopts = optsStr.split(' ');


  for (const opt of aopts) {
    if (!opt) continue;
    
    const [key, value] = opt.split('=');
    if (value === undefined) {
      // !name => false
      // name => true
      if (key.startsWith('!')) {
        opts[key.slice(1)] = false;
      } else {
        opts[key] = true;
      }
    } else {
      // 尝试将值转换为数字,如果失败则保持为字符串
      // opts[key] = isNaN(Number(value)) ? value : Number(value);
      opts[key] = value;
    }
  }

  return opts;

  // for (let i = 0; i < aopts.length; i++) {
  //   if (!aopts[i]) {
  //     continue;
  //   }
  //   const eq = aopts[i].indexOf('=');
  //   if (eq == -1) {
  //     // !name => false
  //     // name => true
  //     if (aopts[i][0] == '!') {
  //       opts[aopts[i].substr(1)] = false;
  //     } else {
  //       opts[aopts[i]] = true;
  //     }
  //   } else {
  //     opts[aopts[i].substr(0, eq)] = aopts[i].substr(eq+1);
  //   }
  // }
}