package myplugin.generator.fmmodel;

public class UIProperty {
	
	private String label;
	
	private String formType;
	
	private Boolean readOnly;
	
	private Boolean next;
	
	private Boolean zoom;
	
	public UIProperty(String formType, Boolean readOnly, Boolean next, Boolean zoom) {
		super();
		this.formType = formType;
		this.readOnly = readOnly;
		this.next = next;
		this.zoom = zoom;
	}

	public String getFormType() {
		return formType;
	}

	public void setFormType(String formType) {
		this.formType = formType;
	}

	public Boolean getReadOnly() {
		return readOnly;
	}

	public void setReadOnly(Boolean readOnly) {
		this.readOnly = readOnly;
	}

	public Boolean getNext() {
		return next;
	}

	public void setNext(Boolean next) {
		this.next = next;
	}

	public Boolean getZoom() {
		return zoom;
	}

	public void setZoom(Boolean zoom) {
		this.zoom = zoom;
	}

	public String getLabel() {
		return label;
	}

	public void setLabel(String label) {
		this.label = label;
	}
	
}
