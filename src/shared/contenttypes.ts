interface IndexContent {
    links: Array<ContentLink>;
}

interface ContentLink {
    title: string;
    href: string;
    image?: string;
    description: string;
    warning: boolean;
    error: boolean;
}

interface ObjectsContent {
    description: string;
    counter: number;
    groups: Array<ObjectGroupContent>;
    missingDescriptions: Array<String>;
    footer?: object;
}

interface ObjectGroupContent {
    name: string;
    title: string,
    description: string,
    link: string,
    objects : Array<ObjectContent>,
    menuItems : Array<ContentLink>
}

interface ObjectContent {
    name: string;
    label: string;
    sfObject: object;
    fields: Array<ObjectFieldContent>;
    validationRules: Array<object>;
    recordTypes: Array<Object>;
}

interface ObjectFieldContent {
    fullName: string;
    label: string;
    background: string;
    fullType: string;
    description: string;
    sfField: object;
    additionalInfo: string;
    pageLayoutInfo?: ObjectPageLayoutData[];
}

interface TriggersContent {
    counter: number;
    groups: Array<TriggerGroupContent>;
    duplicates?: Array<TriggerDuplicate>;
    footer?: object;
}

interface TriggerGroupContent {
    name: string;
    title: string,
    description: string,
    link: string,
    triggers : Array<TriggerContent>,
    menuItems : Array<ContentLink>
}

interface TriggerContent {
    name: string;
    label: string;
    trigger: string;
    triggerMeta: object;
    actions?: string;
    objectName?: string;

}

interface TriggerDuplicate {
    objectName : string;
    action : string;
    triggers: string;
}


interface AuraEnabledHeaderContent {
    counter: number;
    groups: Array<AuraEnabledGroupContent>;
    noAccess: string[];
    footer?: object;
}

interface AuraEnabledGroupContent {
    name: string;
    title: string,
    description: string,
    link: string,
    auraenabled : Array<AuraEnabledContent>,
    menuItems : Array<ContentLink>
}

interface AuraEnabledContent {
    name: string;
    label: string;
    controller: string;
    componentType: string;
    background: string;
    profiles: string[];
    permsets: string[];
}

interface ObjectPageLayoutData {
    layoutName: string;
    objectName: string;
    fieldName: string;
    behavior: string;
}

export {IndexContent, ContentLink, ObjectsContent, ObjectGroupContent, ObjectContent, ObjectFieldContent, TriggersContent, TriggerGroupContent, TriggerContent, TriggerDuplicate,
    AuraEnabledHeaderContent, AuraEnabledGroupContent, AuraEnabledContent, ObjectPageLayoutData}