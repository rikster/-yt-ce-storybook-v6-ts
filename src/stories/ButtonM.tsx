import React from "react"
import { Button } from "@material-ui/core"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import { isString } from "lodash"

// optional inline styles, theme, etc
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            "& > *": {
                margin: theme.spacing(1)
            }
        }
    })
)

interface ButtonProps {
    variant: "text" | "outlined" | "contained"
    color: "default" | "primary" | "secondary" | "disabled" | "link"
    size: "small" | "medium" | "large"
    label: string
    disabled?: boolean
    href?: string
    onClick?: () => void
    //children: React.ReactNode | string
}

export const ButtonM = ({
                            variant,
                            color,
                            size,
                            label,
                            disabled,
                            href,
                            onClick,
                            ...props
                        }: ButtonProps) => {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <Button
                variant={variant}
                color={color}
                size={size}
                disabled={disabled}
                href={href}
                onClick={onClick}
                {...props}
            >
                {label}
            </Button>
        </div>
    )
}

export default ButtonM
