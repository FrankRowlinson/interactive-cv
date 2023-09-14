"use client";

import { Listbox, Transition } from "@headlessui/react";
import classNames from "classnames";
import { useThemeStore } from "@/entities/theme";
import { Theme } from "@/entities/theme";
import styles from "./theme-select.module.css";
import { useEffect, useState, Fragment } from "react";

const themes: Theme[] = ["dark", "light", "neon"];

export function ThemeSelect() {
  const [mounted, setMounted] = useState(false);
  const { theme, switchTheme } = useThemeStore();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className={styles.listbox}>
      <Listbox value={theme} onChange={switchTheme}>
        <Listbox.Button className={styles.button}>{theme}</Listbox.Button>
        <Transition
          as={Fragment}
          leave={styles.transitionLeave}
          leaveFrom={styles.transitionLeaveFrom}
          leaveTo={styles.transitionLeaveTo}
        >
          <Listbox.Options className={styles.options}>
            {themes.map((option) => (
              <Listbox.Option key={option} value={option}>
                {({ active, selected }) => (
                  <li
                    className={classNames(styles.option, {
                      [styles.active]: active,
                      [styles.selected]: selected,
                    })}
                  >
                    {option}
                  </li>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </Listbox>
    </div>
  );
}
